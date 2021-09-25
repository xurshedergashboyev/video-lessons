import {Wrapper} from "./App.style";
import HeaderCta from "./components/HeaderCta";
import AboutUs from "./components/AboutUs";
import OrderCta from "./components/OrderCta";
import CoursesList from "./containers/CoursesList";
import Footer from "./components/Footer";

const App = () => {

  const intToRoman = num => {
    if (typeof num !== 'number') {
      throw new TypeError('num must be a number.');
    } else if (num % 1) {
      throw new Error('num must be an integer.');
    } else if (num < 1 || num >= 4000) {
      throw new RangeError('num must meet the following range requirements: 1 <= num <= 3999');
    }

    const vals = [
      { val: 1000, rom: 'M' },
      { val: 900, rom: 'CM' },
      { val: 500, rom: 'D' },
      { val: 400, rom: 'CD' },
      { val: 100, rom: 'C' },
      { val: 90, rom: 'XC' },
      { val: 50, rom: 'L' },
      { val: 40, rom: 'XL' },
      { val: 10, rom: 'X' },
      { val: 9, rom: 'IX' },
      { val: 5, rom: 'V' },
      { val: 4, rom: 'IV' },
      { val: 1, rom: 'I' },
    ];

    let currentNum = num;
    let romanNumeral = '';
    let i = 0;

    while (currentNum) {
      const { val, rom } = vals[i];

      while (currentNum >= val) {
        romanNumeral += rom;
        currentNum -= val;
        console.log(currentNum)
      }
      // console.log(i++)
      i++;
    }

    return romanNumeral;
  };

  // console.log(intToRoman(3464))

  // const romanToInt = () => {
  //   let num = 0;
  //
  //   let nums = [
  //     {n: 1, val: 'I'}
  //   ]
  //   while (s) {
  //     s = nums[0].n
  //   }
  //
  //   num++
  // };
  //
  // console.log(romanToInt('I'))
    return (
        <Wrapper>
            <HeaderCta/>
            <AboutUs/>
            <OrderCta/>
            <CoursesList />
            <Footer />
        </Wrapper>
    );
}

export default App;
