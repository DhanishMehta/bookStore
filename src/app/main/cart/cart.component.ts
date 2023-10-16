import { Component, Input, Output, EventEmitter } from '@angular/core';

interface book {
  ISBN: number;
  title: string;
  author: string;
  summary: string;
  image: string;
  price: {
    currency: string;
    value: number;
    displayValue: string;
  };
}

interface cartItems {
  product: book | undefined;
  quantity: number;
  currPrice: number | undefined;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() cart: Array<cartItems> | undefined;
  @Input() totalAmount: number | undefined;
  @Output() finalCartFunction: EventEmitter<any> = new EventEmitter();

  addToCart(bookISBN: number|undefined) {
    console.warn("from Cart function addToCart(), input is => "+bookISBN);
    let func = {
      ISBN: bookISBN,
      functionName: 'add',
    };
    this.finalCartFunction.emit(func);
    // this.calculateTotal();
  }

  removeFromCart(bookISBN: number | undefined) {
    let func = {
      ISBN: bookISBN,
      functionName: 'remove',
    };
    this.finalCartFunction.emit(func);
    // this.calculateTotal();
  }

  // calculateTotal() {
  //   console.log("calculating total");
  //   this.totalAmount = 0;
  //   this.cart?.forEach((element) => {
  //     element.currPrice = element.quantity * element.product?.price?.value!;
  //     this.totalAmount! += element.quantity * element.product?.price?.value!;
  //   });
  // }

  clearCart() {
    this.cart = [];
    this.totalAmount = 0;
  }

  handlePayment() {
    //   var options = {
    //     key: "rzp_test_oqThOrnwSgMJmz", // Enter the Key ID generated from the Dashboard
    //     amount: this.totalAmount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //     currency: "INR",
    //     name: "Acme Corp", //your business name
    //     description: "Test Transaction",
    //     image: "https://example.com/your_logo",
    //     order_id: "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    //     handler: function (response) {
    //       alert("Payment Successful" + response);
    //       this.clearCart();
    //     },
    //     prefill: {
    //       //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
    //       name: "Gaurav Kumar", //your customer's name
    //       email: "gaurav.kumar@example.com",
    //       contact: "9000090000", //Provide the customer's phone number for better conversion rates
    //     },
    //     notes: {
    //       address: "Razorpay Corporate Office",
    //     },
    //     theme: {
    //       color: "#3399cc",
    //     },
    //   };
    //   var rzp1 = new Razorpay(options);
    //   rzp1.on("payment.failed", function (response) {
    //     alert(response.error.code);
    //     alert(response.error.description);
    //     alert(response.error.source);
    //     alert(response.error.step);
    //     alert(response.error.reason);
    //     alert(response.error.metadata.order_id);
    //     alert(response.error.metadata.payment_id);
    //   });
    //   document.getElementById("rzp-button1").onclick = function (e) {
    //     rzp1.open();
    //     e.preventDefault();
    //   };
    // }
  }
}
