class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message);
      const lowercase =message.toLowerCase();
      if(lowercase.includes("hello")){
          this.actionProvider.greet();
      }
      if(lowercase.includes("cakes")|| lowercase.includes("cake")){
        this.actionProvider.handleCakes();
      }
      if(lowercase.includes("cupcakes")|| lowercase.includes("cupcake")){
        this.actionProvider.handleCupCakes();
      }
      if(lowercase.includes("pastry")|| lowercase.includes("pastries")){
        this.actionProvider.handlePastries();
      }
      if(lowercase.includes("macarons")|| lowercase.includes("macaron")){
        this.actionProvider.handleMacrons();
      }
      if(lowercase.includes("donut")|| lowercase.includes("donuts")){
        this.actionProvider.handleDonuts();
      }
      if(lowercase.includes("customize")|| lowercase.includes("customize")){
        this.actionProvider.handleCustom();
      }
      if(lowercase.includes("bye")){
        this.actionProvider.bye();
    }
    }
    
  }
  
  export default MessageParser;