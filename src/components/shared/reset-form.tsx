"use client";

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
