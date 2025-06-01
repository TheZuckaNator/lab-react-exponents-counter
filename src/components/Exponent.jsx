// src/components/Exponent.jsx - BONUS ITERATION 4
const Exponent = ({ num, exponent }) => {
    // Calculate the result
    const result = Math.pow(num, exponent);
    
    // Create the multiplication string (e.g., "2 * 2 * 2")
    const multiplicationString = Array(exponent).fill(num).join(' * ');
    
    // Create the exponent label with superscript
    const getExponentLabel = (exp) => {
      const superscripts = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
      return 'n' + exp.toString().split('').map(digit => superscripts[parseInt(digit)]).join('');
    };
    
    return (
      <div className="exponent-counter-container">
        <p className="exponent-label">{getExponentLabel(exponent)}</p>
        <p className="exponent-result">
          {multiplicationString} = <span className="total">{result}</span>
        </p>
      </div>
    );
  };
  
  export default Exponent;