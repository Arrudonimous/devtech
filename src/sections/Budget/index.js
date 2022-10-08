import {
  BudgetContainer,
  BudgetForm,
  Input,
} from './styles'
import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import Button from '../../Components/Button';

export default function Budget() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')


  function handleClearInput() {
    setName('');
    setEmail('');
    setPhone('');
    console.log('Clear')
  }
  return (
    <BudgetContainer id="Contatos">
      <h1>Vamos fazer um orçamento?</h1>
      <span>Fique tranquilo, nosso orçamento é gratuito e sem nenhum compromisso.</span>

      <BudgetForm>
        <Input placeholder='Nome' onChange={(e) => setName(e.target.value)} value={name} />
        <Input placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
        <Input as={IMaskInput} mask="(00) 00000-0000" placeholder='Telefone' onChange={(e) => setPhone(e.target.value)} value={phone} />
        <Button onClick={handleClearInput}>Solicitar orçamento</Button>
      </BudgetForm>
    </BudgetContainer>
  )
}