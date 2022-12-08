import React, { useState, useCallback, InputHTMLAttributes, useRef, ChangeEventHandler } from 'react';
import { Container } from './styles';
import { IconProps } from 'phosphor-react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  type?: string;
  icon?: React.ComponentType<IconProps>;
  onChange?: ChangeEventHandler | undefined;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, type, value, onChange, icon: Icon, ...rest }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }

  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={24} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={ref}
        {...rest}
        type={type}
        label={label}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
});

