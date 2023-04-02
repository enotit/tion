def get_bot_decide():
    from random import randint
    a = {0: "камень", 1:"бумага", 2:"ножницы"} 
    return a[randint(0, 2)]

print(get_bot_decide())
