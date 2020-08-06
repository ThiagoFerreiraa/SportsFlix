import { useState } from 'react';


export default function useForm(valoresIniciais){ 
    const [valores, setValores] = useState(valoresIniciais);
  
    function setValue(chave, valor) {
      // chave : nome, descricao, cor e qualquer outro tipo que estiver em valores iniciais.
      setValores({
        ...valores,
        [chave]: valor, // nome : 'valor colocado no input ou textarea.'
      });
    }
  
    function HandlerMudancas(infoEvento) {
      setValue(
        infoEvento.target.getAttribute('name'),
        infoEvento.target.value,
      );
    }
  
    function clearForm(){
      setValores(valoresIniciais)
    }
  
    return {
      HandlerMudancas,valores, clearForm,
    };
  
}
  
  