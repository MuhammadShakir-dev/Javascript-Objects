 <script>
      /*
             For in loop in javascript objrcts.
        */
      var std_01 = {
        fullName: "Muhammad Shakir",
        Age: 21,
        Department: "Software Engineering",
        std_Id: "BSE-20F-077",
      };

      var std_02 = {
        fullName: "Anum Mustafa",
        Age: 22,
        Department: "Software Engineering",
        std_Id: "BSE-20F-031",
      };

      for (var i in std_01) {
        document.write(i + " : " + std_01[i] + " <br>");
      }
      document.write("<br><br>");
      for (var j in std_02) {
        document.write(j + " : " + std_02[j] + " <br>");
      }
    </script>
