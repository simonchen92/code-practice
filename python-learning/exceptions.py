# this is the basic concept I learn about exceptions

try:
    age = int(input('Age: '))
    print(age)
except ZeroDivisionError:
    print('Age cannot be 0!')
except ValueError:
    print('Invalid Value. Please try again!')
