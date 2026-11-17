import numpy as np
from PIL import Image
from scipy.ndimage import binary_fill_holes, gaussian_filter, binary_dilation, binary_erosion

im = Image.open('frontend/src/assets/hari-prasath-profile.png').convert('RGB')
arr = np.array(im)
h, w, _ = arr.shape

R = arr[:, :, 0].astype(float)
G = arr[:, :, 1].astype(float)
B = arr[:, :, 2].astype(float)
brightness = (R + G + B) / 3.0

# 1. Background identification:
# The background is the bright off-white wall and door frame.
# Off-white wall has high brightness (typically > 160) and neutral colors (low saturation)
max_ch = np.maximum(np.maximum(R, G), B)
min_ch = np.minimum(np.minimum(R, G), B)
saturation = np.where(max_ch > 0, (max_ch - min_ch) / (max_ch + 1e-5), 0)

# The door frame on the right has some slightly darker grey/creamy wall (~145-190)
# But Hari's hair is dark (< 75), blazer is very dark (< 60), skin is warm (R > G > B, saturation > 0.12)
# and shirt is light blue (B > R).

is_person_feature = (brightness < 80) | ((R > G) & (G > B) & (R > 65) & (saturation > 0.10)) | ((B > R + 3) & (brightness > 90) & (brightness < 235))

# Top portion (y < 0.22*h) is entirely wall/ceiling above Hari's hair
# Middle portion (0.22*h <= y < 0.62*h) is head, face, neck, collar
# Bottom portion (y >= 0.62*h) is shoulders and blazer across the frame

y_grid, x_grid = np.ogrid[:h, :w]

# Exclude upper background above hair
valid_y = y_grid >= int(0.22 * h)

# Upper head region constraint (to avoid background on sides of hair/ears)
head_region = (y_grid < int(0.62 * h)) & (x_grid >= int(0.20 * w)) & (x_grid <= int(0.80 * w))

# Torso / shoulder region can span full width
torso_region = (y_grid >= int(0.62 * h))

valid_spatial_mask = valid_y & (head_region | torso_region)

person_mask = is_person_feature & valid_spatial_mask

# Fill internal holes (e.g., inside shirt, tie, face)
filled = binary_fill_holes(person_mask)

# Slight morphological closing to connect hair and collar contours smoothly
dilated = binary_dilation(filled, iterations=5)
filled_solid = binary_fill_holes(dilated)
refined_mask = binary_erosion(filled_solid, iterations=3)

# Feather the edges for a natural studio blend
alpha = gaussian_filter(refined_mask.astype(float), sigma=2.0)
alpha = np.clip(alpha * 1.25, 0.0, 1.0) * 255.0

# Build final transparent RGBA image
rgba = np.dstack([arr, alpha.astype(np.uint8)])
out_img = Image.fromarray(rgba, 'RGBA')

out_img.save('frontend/src/assets/hari-prasath-cutout.png')
out_img.save('frontend/public/images/hari-prasath-cutout.png')
print("Successfully generated refined transparent cutout:", out_img.size)
