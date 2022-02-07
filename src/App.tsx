import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal'
import { GlobalStyle } from "./global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionContext, TransactionProvider } from "./Transactioncontext";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }
  return (
   
      <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard/>
      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal} />
      
      <GlobalStyle/>
    </TransactionProvider>
  );
}

export default App
