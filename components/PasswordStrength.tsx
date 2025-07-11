'use client'
type Props = {
  password: string
}

export default function PasswordStrength({ password }: Props) {
  const getStrength = () => {
    let score = 0
    if (password.length >= 6) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++

    return score
  }

  const strength = getStrength()
  const color = ['bg-red-400', 'bg-yellow-400', 'bg-blue-400', 'bg-green-500'][strength - 1] || 'bg-gray-300'
  const label = ['Fraca', 'Média', 'Boa', 'Forte'][strength - 1] || 'Muito fraca'

  return (
    <div className="mt-1">
      <div className="h-2 rounded w-full bg-gray-200">
        <div className={`h-2 rounded ${color}`} style={{ width: `${(strength / 4) * 100}%` }}></div>
      </div>
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
  )
}
