'use client'

import './modal.scss';

export default function Modal({ set, children }) {

    const close = (e) => {
        if (!e.target.closest("#modal .modal-content")) set("");
    }

    return (
        <div id="modal" onClick={close}>
            <div className="modal-content">
                {children}
            </div>
        </div>
    )
}