'use client'

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import Button from '../Button';
import SearchBar from '../Search';
import add from '@/actions/add';
import { useWalletStore } from '@/lib/states';

import './add.scss';

export default function Add({ set }) {

    const wallet = useWalletStore(state => state.wallet);

    const [data, setData] = useState({});
    const [upload, setUpload] = useState(false);

    useEffect(() => {
        (async () => {
            if (upload) {
                add(data, wallet)
                    .then(response => {
                        if (!response.status) {
                            setUpload(false);
                            return toast.error(response.message);
                        }
                        toast.success("Car emission data is successfully added");
                        return set(false);
                    })
                    .catch(err => {
                        console.error(err);
                        setUpload(false);
                    });
            }
        })();
    }, [upload]);

    return (
        <div className="add-container">
            <h1>Submit Car Emission Data</h1>
            <p className="intro">And help our public database!</p>

            <div className="field">
                <p>Car Manufacturer <span>*</span></p>
                <SearchBar
                    placeholder="Nissan, Ford, etc."
                    set={d => setData({ ...data, maker: d })}
                />
            </div>

            <div className="field">
                <p>Car Model <span>*</span></p>
                <SearchBar
                    placeholder="F-150"
                    set={d => setData({ ...data, model: d })}
                />
            </div>

            <div className="field">
                <p>Car Description</p>
                <SearchBar
                    placeholder="Ford F-150 is a top-selling full-size pickup truck celebrated for its performance and versatility."
                    set={d => setData({ ...data, desc: d })}
                />
            </div>

            <div className="field">
                <p>CO2 Emission (g/km) <span>*</span></p>
                <SearchBar
                    type="number" 
                    placeholder="372"
                    set={d => setData({ ...data, emission: parseFloat(d) })}
                />
            </div>

            <Button
                type="main"
                click={() => setUpload(true)}
            >
                Submit
            </Button>
        </div>
    )
}