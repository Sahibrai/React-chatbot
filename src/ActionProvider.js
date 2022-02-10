class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    greet=()=>{
        const message=this.createChatBotMessage("Hello Customer!!");
        this.addMessageToState(message);
    }
    bye=()=>{
        const message = this.createChatBotMessage("Thanks for visiting. Have a wonderful day. Bye!!");
        this.addMessageToState(message);
    }
    handleCakes=()=>{
        const message = this.createChatBotMessage(
            <ul>
                <li>Chocolate Cake- Rs600</li>
                <li>Red Velvet Cake- Rs700</li>
                <li>Blueberry Cake- Rs1000</li>
                <li>Kit Kat Cake- Rs500</li>
                <li>Butter Scotch Cake- Rs800</li>
                <li>Black Forest Cake- Rs900</li>
            </ul>
            );
        this.addMessageToState(message);
    };
    handleCupCakes=()=>{
        const message = this.createChatBotMessage(
            <ul>
                <li>Chocolate Cupcake- Rs80</li>
                <li>Red Velvet Cupcake- Rs100</li>
                <li>Blueberry Cupcake- Rs120</li>
                <li>Rainbow Cupcake- Rs90</li>
                <li>Strawberry Cupcake- Rs50</li>
                <li>Oreo Cupcake- Rs100</li>
            </ul>
        );
        this.addMessageToState(message);
    };
    handlePastries=()=>{
        const message = this.createChatBotMessage(
            <ul>
                <li>Choco Truffle Pastry- Rs60</li>
                <li>Rainbow Pastry- Rs75</li>
                <li>Vanilla Pastry- Rs40</li>
                <li>Red Velvet Pastry- Rs60</li>
                <li>Oreo Pastry- Rs65</li>
                <li>Black Forest Pastry- Rs50</li>
            </ul>
        );
        this.addMessageToState(message);
    };
    handleMacarons=()=>{
        const message = this.createChatBotMessage(
            <ul>
                <li>Chocolate Macaron- Rs60</li>
                <li>Blueberry Macaron- Rs70</li>
                <li>Mint Macaron- Rs65</li>
                <li>Red Velvet Macaron- Rs50</li>
                <li>Lemon Macaron- Rs65</li>
                <li>Strawberry Macaron- Rs45</li>
            </ul>
        );

        this.addMessageToState(message);
    };
    handleDonuts=()=>{
        const message = this.createChatBotMessage(
            <ul>
                <li>Strawberry Donut- Rs50</li>
                <li>Chocolate Donut- Rs65</li>
                <li>Space Donut- Rs100</li>
                <li>Rainbow Donut- Rs120</li>
                <li>Red Velvet Donut- Rs90</li>
                <li>Oreo Donut- Rs120</li>
            </ul>
        );
        this.addMessageToState(message);
    };
    handleCustom=()=>{
        const message = this.createChatBotMessage(
            "Yes, we can customize anything of your choice. For that just contact via socials given below.",{
        });
        this.addMessageToState(message);  
    };
    addMessageToState=(message)=>{
        this.setState(prevState =>({
            ...prevState,
            messages:[...prevState.messages,message],
        }));
    };
    
  }
  
  export default ActionProvider;