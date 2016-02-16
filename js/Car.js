(function(window)
{
    // Public variables
    Car.prototype.mpg = 30;
    
    // Static variables
    Car.num_of_wheels = 4;
    
    // Constructor function
    function Car(make, model, color)
    {
        // public variables
        this.make = make;
        this.model = model;
        
        // private variable
        var _color = color;
        
        // public getter function
        this.getColor = function(){return _color;};
    }
    
    // Public function startEngine
    Car.prototype.getCarProperties = function()
    {
        console.log( getDescription(this) );
    }
    
    // private methods
    function getDescription(context)
    {
        return  "make: " + context.make +
                "\nmodel: " + context.model +
                "\ncolor: " + context.getColor();
    }
    
    // To make Car available to the global scope
    window.Car = Car;
}(window));