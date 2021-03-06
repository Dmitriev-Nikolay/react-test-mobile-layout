import React from 'react';
import classNames from 'classnames';

const FaqsItem = React.memo(({ title, content }) => {
    const [isActive, setIsActive] = React.useState(false);
    
    const viewFaqItem = () => setIsActive(!isActive);

    return (
        <>
            <div onClick={ viewFaqItem }
                className={ classNames({
                    "faqs__items__title active": isActive,
                    "faqs__items__title": !isActive,
                })
                }>
                { title }
                <svg className={ classNames({
                    "rotate": isActive,
                    "": !isActive,
                })
                }
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.99997 8C7.76632 8.00046 7.53988 7.91908 7.35997 7.77L1.35997 2.77C1.15575 
                        2.60026 1.02733 2.35635 1.00295 2.09192C0.97857 1.8275 1.06023 1.56422 1.22997 
                        1.36C1.39971 1.15578 1.64362 1.02736 1.90805 1.00298C2.17247 0.978601 2.43575 
                        1.06026 2.63997 1.23L7.99997 5.71L13.36 1.39C13.4623 1.30694 13.58 1.2449 13.7063 
                        1.20747C13.8326 1.17004 13.9651 1.15795 14.0962 1.17189C14.2272 1.18582 14.3542 
                        1.22552 14.4698 1.2887C14.5854 1.35187 14.6874 1.43727 14.77 1.54C14.8616 1.64282 
                        14.9309 1.76345 14.9737 1.89432C15.0165 2.0252 15.0318 2.1635 15.0187 2.30056C15.0055 
                        2.43762 14.9642 2.5705 14.8973 2.69085C14.8304 2.81121 14.7394 2.91646 14.63 3L8.62997 
                        7.83C8.44489 7.95552 8.22307 8.01537 7.99997 8Z" fill={ isActive ? "#ffffff" : "#EE3D48" }
                    />
                </svg>
            </div>
            <div className="faqs__items__content">{ isActive && content }</div>
        </>
    );
});

export default FaqsItem;