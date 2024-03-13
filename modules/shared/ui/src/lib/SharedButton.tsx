import { Button } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useRef } from 'react';

export interface BtnExtras {
    border?: string;
    leftIcon?: string | any;
    rightIcon?: string | any;
    type?: string | any;
    isLoading?: boolean;
    loadingText?: string;
    hasError?: boolean;
    errorText?: string;
    isSuccess?: boolean;
    successText?: string;
    disabled?: boolean;
    onClick?: () => void;
    onClickAsync?: () => Promise<void>;
    hover?: object | any;
    active?: object | any;
    focus?: object | any;
}

export interface ButtonProps {
    text: string;
    width: string | object;
    height: string;
    bgColor: string;
    textColor: string;
    borderRadius: string;
    TEST_ID?: string;
    fontSize: object;
    btnExtras?: BtnExtras;
}

export function SharedButton({ TEST_ID, text, width, height, bgColor, textColor, borderRadius, fontSize, btnExtras }: ButtonProps) {
    useRef();
    return (
        <Button
            data-test={TEST_ID}
            onClick={btnExtras?.onClick || btnExtras?.onClickAsync}
            loadingText={btnExtras?.loadingText}
            isLoading={btnExtras?.isLoading}
            leftIcon={<Icon fontSize={`1rem`} icon={btnExtras?.leftIcon} />}
            rightIcon={<Icon fontSize={`1rem`} icon={btnExtras?.rightIcon} />}
            fontWeight={500}
            fontSize={fontSize}
            w={width}
            h={height}
            bgColor={bgColor}
            color={textColor}
            borderRadius={borderRadius}
            border={btnExtras?.border}
            type={btnExtras?.type}
            isDisabled={btnExtras?.disabled}
            _hover={{ filter: `brightness(115%)`, boxShadow: `0px 2px 5px 1px #00000050` }}
            _active={
                btnExtras?.border == null
                    ? btnExtras?.active || {
                          filter: `brightness(70%)`,
                          boxShadow: `0px 1px 5px 1px #00000060`,
                      }
                    : btnExtras?.active
            }
        >
            {text}
        </Button>
    );
}
