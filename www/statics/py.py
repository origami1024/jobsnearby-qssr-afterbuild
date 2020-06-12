# -*- coding: UTF-8 -*-
from PIL import Image
from PIL import ImageFont
from PIL import ImageDraw 

title = u"Электрик"
sal = u'100 - 200 m'
desc = u'Чулавек с навыками в электричествах. Можно зверь.'
desc2 = u'Или робототехника. Но не киборги'
city = u'London'

img = Image.open("sample_in.png")
draw = ImageDraw.Draw(img)

font = ImageFont.truetype("BebasNeue.ttf", 16)

draw.text((10, 10),title,(255,255,255), font=font)
draw.text((10, 50),sal,(255,255,255), font=font)
draw.text((160, 50),city,(255,255,255), font=font)
draw.text((10, 110),desc,(255,255,255), font=font)
draw.text((10, 130),desc2,(255,255,255), font=font)
img.save('sample-out.png')
print("TESTERS 34234234")