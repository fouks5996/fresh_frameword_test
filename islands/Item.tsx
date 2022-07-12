/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface itemProps {
   name: string;
 }

export default function Item(props: itemProps) {

  return (
   <p class={tw`g-amber-600`}> {props.name}</p>
  );
}