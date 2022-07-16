/*

    Objects in javascript

    Objects are a collection of key value pairs.
    Keys are strings and values can be any type of data.
    Objects are used to store data in a structured way.

     Objects is the advance version of arrays.
     
      you can make arrays inside and object.
      you can make multiples functions inside an object. which is called methods.
      you can make multiples variables inside an object. which is called properties.

    */

      var a = {
        fname: "Muhammad",
        lname: "Shakir",
        Age: 21,
        gender : "Male",
        University: "Sindh Madressatul Islam University",
        Degree: "BS-Software Engineering",
        Student_id: "BSE=20F-077",
        Semester: "5th",
        
        address : {
          Country : "Pakistan",
          City: "Karachi",
          Town: "Gulshan-e-Hadeed"
        },
        
        fullName : function(){
            return this.fname + " " + this.lname;
        },
      
        education : function(){
            return this.University + " : " + this.Degree;
        },
        
        physicalDetails : function(){
            return this.Age + " & " + this.gender;
        }
        
      };
      document.write(a.fullName());
      document.write(a.education());
      document.write(a.physicalDetails());
      
      
      
