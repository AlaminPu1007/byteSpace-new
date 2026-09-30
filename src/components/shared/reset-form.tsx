"use client";

/**
 * Form for the search and newsletter fields, which don't have a backend yet.
 * Submitting stops the page from reloading and clears the input instead.
 */
export function ResetForm(props: React.ComponentProps<"form">) {
  return (
    <form
      {...props}
      onSubmit={(event) => {
        event.preventDefault();
        event.currentTarget.reset();
        props.onSubmit?.(event);
      }}
    />
  );
}
