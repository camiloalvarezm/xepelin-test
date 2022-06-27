interface Invoice {
    invoiceId: number,
    issuerId: number,
    receiverId: number,
    amount: number,
    issueDate: Date,
    paymentDate: Date
}

export interface InvoicesState {
    invoices: Array<Invoice>
}

function state(): InvoicesState {
    return {
        invoices: [],
    }
}

export default state;