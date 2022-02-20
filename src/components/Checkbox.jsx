import { styled } from '@stitches/react';
import { CheckIcon } from '@radix-ui/react-icons';
import { blackA } from '@radix-ui/colors';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';


const Checkbox = (props) => {

    const StyledCheckbox = styled(CheckboxPrimitive.Root, {
        all: 'unset',
        backgroundColor: '#214C4E',
        width: 20,
        height: 20,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: "#12262B" },
    });

    const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
        color: '#00DBB6',
    });

    // Exports
    const Checkbox = StyledCheckbox;
    const CheckboxIndicator = StyledIndicator;


    return (<Checkbox id="c1" defaultChecked={props.defaultChecked} onCheckedChange={props.onCheckedChange}>
        <CheckboxIndicator>
            <CheckIcon />
        </CheckboxIndicator>
    </Checkbox>)
}

export default Checkbox