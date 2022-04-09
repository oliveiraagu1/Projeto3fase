import {useState, useContext} from "react";
import styles from "./styles.module.scss";
import Head from "next/head";
import Link from "next/link";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

export default function Home() {

    const { user, setUser } = useContext(AuthContext);

    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}