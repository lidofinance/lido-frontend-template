import { FC, useState, useEffect } from 'react';
import { Modal, Button } from '@lidofinance/lido-ui';
import TokenCheckbox from 'components/tokenCheckbox';
import { BigNumber } from 'ethers';

interface TokenOption {
  value: string;
  amount: BigNumber;
  text: string;
  available: boolean;
  checked: boolean;
}

interface Props {
  tokens: TokenOption[];
  show: boolean;
  onClose: () => void;
  save: (tokens: TokenOption[]) => void;
}

const tokensCloner = (tokens: TokenOption[]) => {
  return tokens.reduce((acc, token) => {
    acc.push({ ...token });
    return acc;
  }, [] as TokenOption[]);
};

const SelectTokenModal: FC<Props> = ({ tokens, show, onClose, save }) => {
  const clone = tokensCloner(tokens);
  const [tokensClone, setTokensClone] = useState(clone);
  useEffect(() => {
    const newClone = tokensCloner(tokens);
    setTokensClone(newClone);
  }, [JSON.stringify(tokens)]);

  const toggleChecked = (value: string) => {
    const tokens = [...tokensClone];
    const token = tokens.find((el) => el.value === value);
    if (token && typeof token.checked === 'boolean' && token.available) {
      if (token.available) {
        token.checked = !token.checked;
      }
    }
    setTokensClone(tokens);
  };
  const handleSave = () => {
    save(tokensClone);
    onClose();
  };
  return (
    <Modal title="Reward claims" open={show} onClose={onClose}>
      {tokensClone.map(({ available, value, checked, amount }) => (
        <TokenCheckbox
          key={value}
          available={available}
          tokenIndex={value}
          amount={amount}
          isChecked={checked}
          handleChange={toggleChecked}
        />
      ))}
      <Button fullwidth onClick={handleSave}>
        Save
      </Button>
    </Modal>
  );
};

export default SelectTokenModal;
