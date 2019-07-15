command = ""
started = False
while True:
    command = input("> ").lower()
    if command == "start":
        if started:
            print("Car has already started!!")
        else:
            started = True
            print("Car started...")
    elif command == "stop":
        if not started:
            print("Car has already stopped!")
        else:
            started = False
            print("Car stopped!")
    elif command == "help":
        print("""
start - start the car
stop - stop the car
quit - to quit
        """)
    elif command == "quit":
        break
else:
    print("Sorry, I don't understand that!")
