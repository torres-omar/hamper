# @tickets.each do |ticket|
#     json.partial! 'api/tickets/ticket', ticket: ticket
# end

json.array! @tickets do |comment|
    json.extract! comment, 
                  :bag_weight,
                  :created_at
end