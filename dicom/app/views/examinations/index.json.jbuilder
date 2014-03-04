json.array!(@examinations) do |examination|
  json.extract! examination, :id, :study, :name, :voltage, :current
  json.url examination_url(examination, format: :json)
end
