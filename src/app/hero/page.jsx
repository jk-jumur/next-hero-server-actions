import { Button } from "@heroui/react";


const HeroPage = () => {
    return (
        <div>
            hero page
            <br/>
             <Button>Hero Button</Button>
               <Button  variant="outline">Outline</Button>
              <Button  variant="danger">
                    Danger
                </Button>
        </div>
    );
};

export default HeroPage;