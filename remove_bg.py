from PIL import Image
import os

def remove_background(input_path, output_path, bg_color='white'):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # If it's the black background image
        if bg_color == 'black':
            # Remove blackish pixels
            if item[0] < 30 and item[1] < 30 and item[2] < 30:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
        else:
            # Remove whitish pixels
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)

    img.putdata(newData)
    
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, "PNG")
    
    # Create favicon (square)
    width, height = img.size
    new_size = max(width, height)
    fav_img = Image.new("RGBA", (new_size, new_size), (255, 255, 255, 0))
    fav_img.paste(img, ((new_size - width) // 2, (new_size - height) // 2))
    fav_img.thumbnail((256, 256))
    
    favicon_path = r"c:\Users\HP\Desktop\PROJECTS\marketing-website\src\favicon.ico"
    fav_img.save(favicon_path, format="ICO")

# Use the high-quality PNG image from 20:28
remove_background(r"C:\Users\HP\.gemini\antigravity\brain\4b635131-a675-45db-a20f-3367ce37e469\media__1777301912559.png", r"c:\Users\HP\Desktop\PROJECTS\marketing-website\public\images\logo-transparent.png", 'white')
