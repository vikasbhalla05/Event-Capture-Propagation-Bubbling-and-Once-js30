# Key Learnings

1. An event on multiple nested elements will ripple over all the elements.
2. capture property is going from top layer to inside the nested elements is value default `false`.
3. `capture=true` will fire of the event listener going down the nest.

	``button.addEventListener('click', logText, {
		capture: false,
		once: true
	 }``

4. Bubbling is the property of back-firing the capture and firing of event listeners `ripples` which is true by default.
5. To stop bubbling on an event pass the `e` into the function and do `e.stopPropagation`
6. adding `once: true` only runs the function once uses- store checkout.