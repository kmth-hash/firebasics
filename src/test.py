import math # import package to use square root method

# method takes 1,2,3 as parameter
def get_side(num):
    #try except block is used to filter any alphanumeric values
    try :
        #int() method converts string to integer
        # input () method reads the values from keyboard
        # string literalsf(f'') is used to print variables inside the string in print method
        ln = int(input(f'Enter side length #{str(num)}: '))
        # if number is positive and greater than 0
        if ln >0 :
            # return the number
            return ln
        else :
            # else a while loop is run continuously until a positive number is entered by user
            while True:
                #print invalid input and ask user to re enter value
                ln = int(input('Invalid side value.Please reenter: '))
                if ln>0 :#check if number is valid
                    #if true , return the value
                    return ln
    except :
        #run  while loop is run continuously until a positive number is entered by user
        while True:
            # print invalid input and enter value until its valid
            ln = int(input('Invalid side value.Please reenter: '))
            if ln>0 :
                #return valid value(integer and greater than 0)
                return ln
        
#method takes 3 sides of triangle as a , b and c
def categorize_triangle(a,b,c):
    # if all sides are equal , its equilateral
    if a==b==c:
        return "equilateral "#return value
    elif a==b or b==c or c==a:#else check if any two values are equal
        return "isosceles "#return isosceles
    else:#else return scalene 
        return "scalene "
#method to compute area of triangle
#takes three sides as input parameter
def compute_area(a,b,c):
    #find s using the given formula
    s = (a+b+c)/2
    #find area using math.sqrt(square root)
    area = math.sqrt( s*(s-a)*(s-b)*(s-c))
    #return the derived area from the formula
    return area

#method to print results takes traingle type and area from previous methods
def print_results(triangleType , area):
    #print() method is used to print the values 
    print(f'This is an {triangleType} triangle\n with area {format(area , ".3f")}')
    # method returns no value

# main method
def main():
    # print welcome message
    print('Welcome to the Traingle')
    print('Evaluator!\n\n')

    #infinite loop --> while with true condition
    while True :
        #read three side values
        sideA = get_side(1)
        sideB = get_side(2)
        sideC = get_side(3)

        #find the type of triangle by calling categorize_traingle method with sides
        triangleType = categorize_triangle(sideA , sideB , sideC)
        #calculate area using the method
        #passing the 3 sides read earlier as parameters
        #returned area is stored in variable 'area'
        area = compute_area(sideA , sideB , sideC)
        
        #print the returned values using print_results() method
        print_results(triangleType , area)
        #ask user for input 
        # if input value == n , then terminate the while loop using break
        # else continue the loop and go for next iteration of traingle
        userResponse = input('Process another triangle(y or n)?')
        if userResponse=='n':
            print('Thanks for using the Traingle\n Evaluator!')
            break

# first method to be executed when the python file is executed 
if __name__ == '__main__':
    main()