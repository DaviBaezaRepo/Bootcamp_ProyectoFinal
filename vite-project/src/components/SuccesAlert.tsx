export default function SuccessAlert(props:any) {
    return (
        <div className="mt-2 bg-teal-100 border border-teal-200 text-sm text-teal-800 rounded-lg p-4 dark:bg-teal-800/10 dark:border-teal-900 dark:text-teal-500" role="alert">
        {props.children}
</div>

    )
}