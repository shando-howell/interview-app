const InterviewCard = ({ 
    interviewId,
    userId,
    role,
    type,
    techstack,
    createdAt
}: InterviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;

    return (
        <div>Interview Card</div>
    )
}

export default InterviewCard