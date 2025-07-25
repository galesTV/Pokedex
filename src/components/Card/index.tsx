import { FC } from "react";
import * as Atom from './atoms';
import { FlexBox } from "../Flexbox";
import { TPokemonType } from "../../interface";

interface ICardProps {
    id: string;
    name: string;
    image: string;
    preview?: string
    type: TPokemonType,
}

const Card: FC<ICardProps> = ({ id, name, image, preview, type }) => {
    return (
    <Atom.Container gap="xs" align="center" justify="center" direction="column" >
        <FlexBox align="center" justify="flex-end" direction="row">
            <Atom.PokemonText type={type}>#{id}</Atom.PokemonText>
        </FlexBox>
        <Atom.PokemonSpot type={type} align="center" justify="center" direction="column" > 
            <Atom.PokemonSprite src={image} alt="" />
        </Atom.PokemonSpot>
        <FlexBox align="center" justify="space-between" direction="row">
            <Atom.PokemonText type={type}>{name}</Atom.PokemonText>
            {preview && <img src={preview} alt="" />}
        </FlexBox>
    </Atom.Container>
    );
};

export default Card