secret_number = 6

guess_count = 0
guess_limit = 3
while guess_count < guess_limit:
    guess = int(input('Guess: '))
    guess_count += 1
    if guess == secret_number:
        print('You got it right!')
        break
else:
    print('Sorry you have not made the correct guess! Please try again')