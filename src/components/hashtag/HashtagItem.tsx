export default function HashtagItem({ company }: { company: string }) {
    return (
        <li key={company}><button>#{company}</button></li>
    )
}
