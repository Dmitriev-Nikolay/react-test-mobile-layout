import React from 'react';

const useOnScreen = (ref, rootMargin = '20px') => {
    const [isIntersecting, setIntersecting] = React.useState(false);

    React.useEffect(() => {
        let observerRefValue = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            },
        );
        if (observerRefValue) {
            observer.observe(observerRefValue);
        }
        return () => {
            if (observerRefValue) {
                observer.unobserve(observerRefValue);
            };
        };
    });
    return isIntersecting;
};

export default useOnScreen;