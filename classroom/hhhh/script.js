class Avto{
    constructor(maknish){
        this.maknish = maknish;
    }
}

class Mnacaty extends Avto {
    constructor(maknish,mator, bardzrutyun){
        super(maknish);
        this.mator = mator;
        this.bardzrutyun = bardzrutyun
    }
    
    asa(){
        console.log(`ays avtona  ${this.maknish} matory ${this.mator} bardzrutyuny ${this.bardzrutyun}`)
    }
     
}

let p = new Mnacaty(" mersedes", "5.5", "7sm");
p.asa();