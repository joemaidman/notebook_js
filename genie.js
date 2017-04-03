// GenieJS Test Suite
// Add describe block with anonymous function
// Add before and after blocks
// Add anonymous function for each test
// Add spyOn
// Add feature testing via http
// Add language to output
// Breakdown stack trace by line
// Matchers: toBe(===)
// .not (invert)
// .toEqual (for objects)
// .toMatch (regex)
//toBeDefined
// toBeNull
// toBeTruthy
// toBeFalsey
// toContain
// toBeLessThan
// toBeGreaterThan
// toBeCloseTo
// toThrow
// toThrowError
//x for describe and it blocks for pending


(function(exports) {
    function Wish(name, subject) {
        this.name = name;
        this.subject = subject;
    };

    var assert = function(name, x) {
        try {
            var printedTestResult = document.createElement('li')
            if (!x) {
                throw new Error(name + ": Fail");
            } else {
                printedTestResult.innerHTML = name
                printedTestResult.className += " passed"
                document.getElementById('testresults').appendChild(printedTestResult)
            }
        } catch (error) {
            document.getElementById('the-don').setAttribute("src", "sadgenieface.gif");
            console.log("%c" + error.stack, "color: red;");
            printedTestResult.innerHTML = error.stack
            printedTestResult.className += " failed"
            document.getElementById('testresults').appendChild(printedTestResult)
        }
    }

    Wish.prototype.isDefined = function() {
        assert(this.name, typeof(this.subject) !== "undefined");
    }

    Wish.prototype.isEmptyString = function() {
        assert(this.name, this.subject === "")
    };

    Wish.prototype.isType = function(type) {
        assert(this.name, this.subject.constructor.name === type)
    }

    Wish.prototype.isEqualTo = function(objectToMatch) {
        assert(this.name, this.subject.toString() === objectToMatch.toString())
    }

    freezeTime = function(time){
      this.originalDateToStringMethod = Date.toString;
      var dummyDate = time.toString();
      Date.prototype.toString = function(){
        return dummyDate;
      };
    }

    unfreezeTime = function () {
      Date.prototype.toString = function(){
      return Date.apply(this.originalDateToStringMethod);
      };
    };

    exports.Wish = Wish
    exports.freezeTime = freezeTime;
    exports.unfreezeTime = unfreezeTime;

})(this);
