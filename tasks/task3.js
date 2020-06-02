const Work1 = () => {

    function Show({target, name, descriptor}) {
      const originFn = descriptor.value;
      descriptor.value = function( ...args ){
        for(let i = 0;i<args.length;i++) {
          if(typeof args[i]!=='number' && !isNaN(Number(args[i]))) {
            args[i] = Number(args[i]);
          }
          else if(typeof args[i] === 'number'){continue;}
          else {
            console.error('The argument(s) is wrong! Please, write the number.');
            return;
          }
        }
        console.log(`Arguments: ${args}`);
        console.log(`Final result: ${originFn.apply(this, args)}`);
        return this;
      }
    }

    class CoolMath {
      @Show
      addNumbers(a,b){ return a+b; }
      @Show
      multiplyNumbers(a,b){return a*b}
      @Show
      minusNumbers(a,b){ return a-b }
    }
    let Calcul = new CoolMath();
    let x = Calcul.addNumbers(2, 2);
    let y = Calcul.multiplyNumbers("10", "2")
    let z = Calcul.minusNumbers(10, 2)
  
  };
  
  export default Work1;