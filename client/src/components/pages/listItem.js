import React from 'react';

export default function ListItem () {
    return (
        
        <div class="List-Item-Page">
         <h1>List Item Page</h1>
            <div class="carousel">
                <div class="leftButton">
                    <a class="prev">&#100094;</a>
                    </div>
                    <div class="slide-fade" style = "display: block">
                        <div class="numbertext">1 / 8</div>
        </div>

        <div class="slide-fade" style = "display: none">
                        <div class="numbertext">2 / 8</div>
        </div>

        <div class="slide-fade" style = "display: none">
                        <div class="numbertext">3 / 8</div>
        </div>

        <div class="slide-fade" style = "display: none">
                        <div class="numbertext">4 / 8</div>
        </div>

        <div class="slide-fade" style = "display: none">
                        <div class="numbertext">5 / 8</div>
        </div>

        <div class="slide-fade" style = "display: none">
                        <div class="numbertext">6 / 8</div>
        </div>

        <div class="slide-fade" style = "display: none">
                        <div class="numbertext">7 / 8</div>
        </div>

        <div class="slide-fade" style = "display: none">
                        <div class="numbertext">8 / 8</div>
        </div>

        <div class='rightButton'>
              <a class="next">&#10095;</a>
            </div>

        </div>
        </div>
    )
}

class Carousel{
    constructor(carousel){
        this.carousel= carousel;
        this.cards = this.carousel.querySelectorAll(".mySlides");
        this.leftbutton = document.querySelector(".leftButton");
        this.rightButton = document.querySelector(".rightButton");
        this.index = 0;
        this.leftbutton.addEventListener('click', ()=> this.toggleLeft());
        this.rightButton.addEventListener('click', ()=> this.toggleRight());

    }
    toggleRight(){
        this.cards[this.index].style.display = 'none';
        console.log(this.index);
        if (this.index === this.cards.length -1)
        this.index = 0;
    else {
        this.index ++
        }
        this.cards[this.index].style.display = 'block';
        }

        toggleLeft(){
            this.cards[this.index].style.display = 'none';

            if (this.index === 0){
                this.index = this.cards.length -1;
            }
            else {
                this.index
            }
            this.cards[this.index].style.display = 'block';
        }

    }
        
const carousels = document.querySelectorAll(".carousel")
carousels.forEach(carousel => new Carousel(carousel));