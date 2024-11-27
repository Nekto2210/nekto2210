# import turtle

# turtle.shape("turtle")
# turtle.color("green")
# turtle.speed(5)
# size = 50
# turtle.forward(size)
# turtle.left(90)
# turtle.forward(size)
# turtle.left(90)
# turtle.forward(size)
# turtle.left(90)
# turtle.forward(size)

# turtle.shape("turtle")
# turtle.speed(5)
# angle = int(input("введите количество углов"))
# size = int(input("введите длину стороны"))
# color = input("Enter the color")
# turtle.color(color)
# for i in range(angle):
#     turtle.forward(size)
#     turtle.left(360 / angle)
# turtle.done()
# turtle.hideturtle()

# turtle.shape("turtle")
# turtle.speed(2)
# turtle.color("purple")
# for i in range(27):
#     turtle.forward(60)
#     turtle.left(87)
# turtle.done()
# turtle.hideturtle()

import random
botNumber = random.randint(1, 10)
playerNumber = int(input("Введите число"))
while playerNumber != botNumber:
    if playerNumber > botNumber:
        print("Ты не угадал, моё число, меньше твоего")
    else:
        print("Ты не угадал, моё число, больше твоего")

    if botNumber-playerNumber >=2 and botNumber-playerNumber <=4:
        print("Тепло")
    elif botNumber-playerNumber >=4:
        print("Холодно")
    elif botNumber-playerNumber <=2:
        print("Горячо")
    else:
        print("Очень холодно")
    
    playerNumber = int(input("Введите число"))
     
print(f"ты угадал, моё число: {botNumber}") 

# если число меньше двух
# от 2 - 4
# если число больше четырех