import { Button } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import React from 'react';

export interface BtnExtras {
    border?: string;
    leftIcon?: string;
    rightIcon?: string;
    type?: 'button' | 'submit' | 'reset';
    isLoading?: boolean;
    loadingText?: string;
    hasError?: boolean;
    errorText?: string;
    isSuccess?: boolean;
    successText?: string;
    disabled?: boolean;
    onClick?: () => void;
    onClickAsync?: () => Promise<void>;
    hover?: object;
    active?: object;
    focus?: object;
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

export function SharedButton({ TEST_ID, text, width, height, bgColor, textColor, borderRadius, fontSize, btnExtras = {} }: ButtonProps) {
    const { border, leftIcon, rightIcon, type, isLoading, loadingText, disabled, onClick, onClickAsync, hover, active } = btnExtras;

    return (
        <Button
            data-test={TEST_ID}
            onClick={
                onClickAsync
                    ? async () => {
                          await onClickAsync();
                      }
                    : onClick
            }
            loadingText={loadingText}
            isLoading={isLoading}
            leftIcon={leftIcon ? <Icon fontSize="1rem" icon={leftIcon} /> : undefined}
            rightIcon={rightIcon ? <Icon fontSize="1rem" icon={rightIcon} /> : undefined}
            fontWeight={500}
            fontSize={fontSize}
            w={width}
            h={height}
            bgColor={bgColor}
            color={textColor}
            borderRadius={borderRadius}
            border={border}
            type={type}
            isDisabled={disabled}
            _hover={
                bgColor === 'transparent' && textColor === 'purple.200'
                    ? { filter: 'brightness(115%)', boxShadow: '0px 2px 5px 1px #00000050', bgColor: 'purple.200', color: 'grey.100' }
                    : textColor === 'red.200' && bgColor === 'transparent'
                    ? { filter: 'brightness(115%)', boxShadow: '0px 2px 5px 1px #00000050', bgColor: 'red.200', color: 'grey.100' }
                    : { filter: 'brightness(115%)', boxShadow: '0px 2px 5px 1px #00000050' }
            }
            _active={border == null ? active || { filter: 'brightness(70%)', boxShadow: '0px 1px 5px 1px #00000060' } : active}
        >
            {text}
        </Button>
    );
}
