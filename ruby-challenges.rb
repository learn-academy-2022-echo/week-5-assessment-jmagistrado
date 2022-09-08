# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudocode: 
# define a method named where_letters that has an input/parameter of an array and a variable
# we will want to iterate through the array's values and locate any words that contain a particular letter 
    # we want a new array to be returned that includes words that only include that particular letter 
    # we can use the select method to filter through the array and return a new array of values that have met our set conditions 
# Use conditional statements to evaluate: if the array includes the variable argument, to return the value


    def where_letters array, variable
        array.select do |value|
            if value.include?(variable)
                value
            end
        end
    end


        p where_letters(beverages_array, letter_o)
            #output: ["coffee", "soda water"]
        p where_letters(beverages_array, letter_t)
            #output: ["tea", "water", "soda water"]

# Refactor: Update - it failed and not sure why?
# I think could also refactor this code block which would save two lines - I can use the ternary operator which allows us to get rid of the if block all together and has the evaluation done on one line. However, I would need to have another possible output in case the conditions are not met, to do this, I went ahead and set the other possible return to 'false' in case there were no words that contained the variable that we passed


# def where_letters array, variable
#     array.select do |value|
#         value.include?(variable) ? value : 'false'
#     end
# end


# however, when I ran this code - it didn't seem to work, but not sure I understand why since its like any other time I set up the ternary operator. I tried to use other returns to replace the 'false', yet they also don't work. I also wasn't able to find any answers online.

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

# Pseudocode: 
# define a method named hash_arr that has an input/parameter of hash 
# iterate through the hash to return an array with hash values at each index in alphabetical order 
    # use map method with parameters key, value of so we can iterate through each value and have the map block return value 
        # set map method to a new variable called my_arr to be used later 
    # within def block, use variable my_arr and use following methods: 
        # use .flatten method to remove all the nested arrays so we can access each value
        # then use .sort method which will give the ability to sort the order from a-z order 

    def hash_arr hash 
        my_arr = hash.map do |key, value|
            value
        end
        my_arr.flatten.sort()
    end

    p hash_arr us_states


    #output: ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Vermont", "Washington"]



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


class Bike 
    attr_accessor :model, :wheels, :current_speed

    def initialize model
        @model = model 
        @wheels = 2 
        @current_speed = 0 
    end
    def bike_info 
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end 
    def pedal_faster current_speed
        @current_speed += current_speed
    end
    def brake current_speed
        @break_speed = @current_speed -= current_speed
        # refactored code bloc using ternary operator: 
        @break_speed <= -1 ? @break_speed = 0 : @break_speed
                #    if @break_speed <= -1
                #    @break_speed = 0
                #    else 
                #     @break_speed
    end
end

my_bike = Bike.new('mountain')
p my_bike
    #output: #<Bike:0x00007fc2b300d728 @model="mountain", @wheels=2, @current_speed=0>

p my_bike.bike_info
    #output: "The mountain bike has 2 wheels and is going 0 mph."

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Added to my_bike class to answer 3b: 
#     def pedal_faster current_speed
#         @current_speed += current_speed
#     end
#     def brake current_speed
#         @current_speed -= current_speed 
#     end

p my_bike.pedal_faster(10)
    #output: 10 
p my_bike.pedal_faster(18)  
    #output: 28  
p my_bike.brake(5)
    #output: 23
p my_bike.brake(25)
    #output: 0



# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# notes: 
#  I was able to work set up my class correctly, however I am running into a blocker where my brake block gets substracted and goes into the negative integers when running the invocation of my_bike.brake(25) as the output goes to -2, where it should just stop at zero since there is no such thing as negative speed. I want to figure out how I can still be able to call on brake block to substract speed from the total speed, however it will stop at zero.

# My next thought process was that in our class, brake block is just another method so I could probably write some more code execution that it can perform in case the total was less than 0 so I wrote the code below: 

        # def brake current_speed
        #     new_speed = @current_speed -= current_speed 
        #     if new_speed <= -1
        #      0
        #     end

# This got me closer to what I wanted because when I ran the invocation of my_bike.brake(25), the output was zero. However, I was running to a nil being outputed for the invocation of my_bike.brake(5). This is what I was seeing in the terminal: 

        # p my_bike.pedal_faster(10)
        #     #output: 10 
        # p my_bike.pedal_faster(18)  
        #     #output: 28  
        # p my_bike.brake(5)
        #     #output: nil
        # p my_bike.brake(25)
        #     #output: 0


        # I realized that I probably would need to store my math into another variable which I could use to set my conditionals. I created a new variable called brake_speed which I was able to call upon to set if/else statements that would help me ensure that speed output would not go pass 0. By doing this, I was able to state if the break speed was less than or equal to -1, it would return that the speed was 0. However, what I also needed was an else statement that would return the brake_speed in case the speed was more than -1. Doing this helped me receive the expected output for each invocation.

        # def brake current_speed
        #     @break_speed = @current_speed -= current_speed
        #    if @break_speed <= -1
        #    @break_speed = 0
        # else 
        #     @break_speed
        # end

        # :Lastly, I knew that I would be able to refactor this code by using the ternary operator which also exists in Ruby. Since my brake block uses conditionals, I thought it would be a great opporuntity to refactor my code so it can be less lines and the evaulations can be simplified. 

        # refactored code: 
        # def brake current_speed
        #     @break_speed = @current_speed -= current_speed
        #     # refactored code bloc using ternary operator: 
        #     @break_speed <= -1 ? @break_speed = 0 : @break_speed
        # end

