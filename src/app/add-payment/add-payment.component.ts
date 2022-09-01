import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Payment } from '../interface/payment';
import { AccountService } from '../service/account.service';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

 
  accountId: string = ""
  payment: Payment = {
    amount: "", ccNum: "", email: "", expDate: ""
  }
  constructor(private accountService: AccountService, private paymentService: PaymentService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.accountId = this.activatedRoute.snapshot.params["accountId"]
  }

  pay() {
    this.payment.email = localStorage.getItem("email") as string
    console.log(this.payment);
    // this.paymentService.chargeCC(this.payment).subscribe(resp => {
    //   console.log(resp);
    //   alert("payment done");
    // })
    let account = { "accountId": this.accountId, "balance": this.payment.amount }
    this.accountService.addBalance(account).subscribe(resp => {

    })
  }


}
