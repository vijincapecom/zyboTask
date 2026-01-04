'use client';
import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

type LightBoxDialogProps = {
  images: { src: string }[];
  openVal: boolean;
  setOpen: (val: boolean) => void;
  index?: number | null;
};

const LightBoxDialog: React.FC<LightBoxDialogProps> = ({ images, openVal, setOpen, index }) => {
  return (
    <Lightbox
      open={openVal}
      index={index ?? 0}
      close={() => setOpen(false)}
      slides={images}
      styles={{
        container: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        },
      }}
    />
  );
};

export default LightBoxDialog;
