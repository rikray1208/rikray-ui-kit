import React, { useRef } from 'react';

import { Toaster, ToasterProps, ToasterRef } from '../index';
//readonly [React.RefObject<ToasterRef>, React.ReactElement<any, string | React.JSXElementConstructor<any>>]
export function useToast(
    options?: ToasterProps,
): readonly [React.RefObject<ToasterRef>, React.ReactElement<any, string | React.JSXElementConstructor<any>>] {
    const toastRef = useRef<ToasterRef>(null);
    const context: React.ReactElement = <Toaster ref={toastRef} {...options} />;

    return [toastRef, context];
}
