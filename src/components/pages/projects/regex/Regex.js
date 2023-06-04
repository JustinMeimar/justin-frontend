import ProjectBase from "../ProjectBase.js";
import RegexContent from "./RegexContent.js";
import "../css/RegexContent.css";

function RegexProject() {
  
  const RegexProjectContent = () => {
    return (<RegexContent />);
  }

  const RegexProjectTitle = () => {
    return (
      <div> &#9881; Regex Engine </div>
    );
  }
  
  const RegexProjectSubtitle = () => {
    return (
      <div> A NFA driven Regular Expression engine from scratch</div>
    );
  }
  
  const modalContent = `

  # Regex Engine

  ### Info
    The regular expression grammar used in this project is inspired the original 
    used in formal language theory. If the syntax looks a little weird, thats because
    it is very weird... Single character tokens were chosen to make tokenizing simple. 
    
    The main goal of this project was to prove the construction of any regular 
    expressions is possible through use of the closure properties. 

    This is the reason for so many epsilon edges. This engine does not produce the
    most efficient NFA to recognize an expression, but it does always generate a 
    correct one :D  
   
  ### Grammar Rules
  
    regex: union;
    union: concat (UNION concat)*;
    concat: star (CONCAT star)*;
    star: paren (STAR)*;
    complement: (COMPLEMENT)* paren;
    paren: leaf | '('union ')';
    leaf: (LETTER | EPSILON | EMPTY_SET);
    
    UNION = 'U';
    CONCAT = '&';
    STAR = '*';
    LETTER = [a-zA-Z] / 'U'; 

  #### Operator Precedence 
    0. parentheses '(' ')'
    2. kleen star '*'
    3. concatenation '&'
    4. union 'U' 
  `;

  return (
    <ProjectBase 
      title={RegexProjectTitle()} 
      subtitle={RegexProjectSubtitle()}
      content={RegexProjectContent()}  
      modal_info={modalContent}
    />
  );
}

export default RegexProject;